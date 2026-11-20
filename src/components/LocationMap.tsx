import { useEffect, useState, useCallback } from 'react';
import {
  APIProvider,
  APILoadingStatus,
  AdvancedMarker,
  InfoWindow,
  Map,
  Pin,
  useAdvancedMarkerRef,
  useApiLoadingStatus,
  useMap,
  useMapsLibrary,
} from '@vis.gl/react-google-maps';
import { ExternalLink, MapPin } from 'lucide-react';
import { BUSINESS_INFO } from '../data/business';

interface LatLngLiteral {
  lat: number;
  lng: number;
}

interface ResolvedLocation {
  position: LatLngLiteral;
  displayName: string;
  formattedAddress: string;
  googleMapsURI?: string;
}

interface PlaceCoordinate {
  lat: number | (() => number);
  lng: number | (() => number);
}

interface PlaceSearchResultItem {
  displayName?: string;
  location?: PlaceCoordinate | null;
  formattedAddress?: string;
  googleMapsURI?: string;
}

const MAPS_API_KEY =
  (import.meta.env.VITE_GOOGLE_MAPS_API_KEY as string | undefined) ||
  ((globalThis as unknown as { GOOGLE_MAPS_API_KEY?: string }).GOOGLE_MAPS_API_KEY ?? '');

function MapFallbackCard({ note }: { note: string }) {
  return (
    <div className="h-[340px] sm:h-[380px] w-full rounded-xl border border-white/15 bg-[#0A1830] flex flex-col items-center justify-center p-6 text-center">
      <div className="w-12 h-12 rounded-xl bg-blue-600/20 border border-blue-400/30 flex items-center justify-center mb-4">
        <MapPin className="w-6 h-6 text-blue-400" aria-hidden="true" />
      </div>
      <h4 className="font-display text-lg font-bold text-white mb-2">
        {BUSINESS_INFO.name}
      </h4>
      <p className="text-sm text-slate-300 max-w-sm mb-2">{BUSINESS_INFO.address}</p>
      <p className="text-xs text-slate-400 max-w-sm mb-5">{note}</p>
      <a
        href={BUSINESS_INFO.googleMapsUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 px-4 py-2.5 text-xs sm:text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors whitespace-nowrap"
      >
        <span>Open Location in Google Maps</span>
        <ExternalLink className="w-4 h-4 shrink-0" aria-hidden="true" />
      </a>
    </div>
  );
}

function BusinessLocationController({
  onQuotaExceeded,
}: {
  onQuotaExceeded: () => void;
}) {
  const map = useMap();
  const placesLib = useMapsLibrary('places');
  const [markerRef, marker] = useAdvancedMarkerRef();
  const [resolved, setResolved] = useState<ResolvedLocation | null>(null);
  const [infoOpen, setInfoOpen] = useState(true);

  useEffect(() => {
    if (!placesLib || !map) return;

    let cancelled = false;

    const locateBusinessArea = async () => {
      try {
        const request = {
          textQuery: BUSINESS_INFO.address,
          fields: ['displayName', 'location', 'formattedAddress', 'googleMapsURI'],
          region: 'in',
          language: 'en',
          maxResultCount: 1,
        };

        const { places } = (await placesLib.Place.searchByText(request)) as {
          places?: PlaceSearchResultItem[];
        };

        if (cancelled) return;

        const firstPlace = places?.[0];
        if (firstPlace && firstPlace.location) {
          const rawLoc = firstPlace.location;
          const lat = typeof rawLoc.lat === 'function' ? rawLoc.lat() : rawLoc.lat;
          const lng = typeof rawLoc.lng === 'function' ? rawLoc.lng() : rawLoc.lng;

          const position: LatLngLiteral = { lat, lng };
          setResolved({
            position,
            displayName: firstPlace.displayName || BUSINESS_INFO.name,
            formattedAddress: firstPlace.formattedAddress || BUSINESS_INFO.address,
            googleMapsURI: firstPlace.googleMapsURI ?? BUSINESS_INFO.googleMapsUrl,
          });

          map.setCenter(position);
          map.setZoom(15);
        }
      } catch (err: unknown) {
        const message = err instanceof Error ? err.message : String(err);
        if (
          message.includes('RESOURCE_EXHAUSTED') ||
          message.includes('429') ||
          message.includes('OVER_QUERY_LIMIT') ||
          message.includes('Quota')
        ) {
          onQuotaExceeded();
          window.dispatchEvent(new CustomEvent('gmp-quota-exceeded'));
        }
      }
    };

    void locateBusinessArea();

    return () => {
      cancelled = true;
    };
  }, [placesLib, map, onQuotaExceeded]);

  const handleMarkerClick = useCallback(() => {
    setInfoOpen((prev) => !prev);
  }, []);

  if (!resolved) {
    return null;
  }

  return (
    <>
      <AdvancedMarker
        ref={markerRef}
        position={resolved.position}
        title={BUSINESS_INFO.name}
        onClick={handleMarkerClick}
      >
        <Pin background="#2563EB" borderColor="#FFFFFF" glyphColor="#FFFFFF" />
      </AdvancedMarker>

      {infoOpen && marker && (
        <InfoWindow
          anchor={marker}
          maxWidth={280}
          onCloseClick={() => setInfoOpen(false)}
        >
          <div className="text-slate-900 p-1">
            <p className="font-display font-bold text-sm text-[#071226] mb-1">
              {BUSINESS_INFO.name}
            </p>
            <p className="text-xs text-slate-600 leading-relaxed mb-2">
              {resolved.formattedAddress}
            </p>
            <a
              href={resolved.googleMapsURI || BUSINESS_INFO.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-xs font-semibold text-blue-700 hover:text-blue-600 hover:underline"
            >
              <span>Directions in Google Maps</span>
              <ExternalLink className="w-3 h-3" aria-hidden="true" />
            </a>
          </div>
        </InfoWindow>
      )}
    </>
  );
}

function MapViewport({
  quotaExceeded,
  onQuotaExceeded,
}: {
  quotaExceeded: boolean;
  onQuotaExceeded: () => void;
}) {
  const status = useApiLoadingStatus();

  if (
    quotaExceeded ||
    status === APILoadingStatus.FAILED ||
    status === APILoadingStatus.AUTH_FAILURE
  ) {
    return (
      <MapFallbackCard note="Interactive map preview is currently unavailable. Use the direct link below to view Achunthanvayal, Ramanathapuram on Google Maps." />
    );
  }

  return (
    <div className="relative h-[340px] sm:h-[380px] w-full rounded-xl overflow-hidden border border-white/15 bg-[#0A1830]">
      <Map
        defaultCenter={{ lat: 0, lng: 0 }}
        defaultZoom={2}
        mapId="DEMO_MAP_ID"
        gestureHandling="cooperative"
        internalUsageAttributionIds={['gmp_mcp_codeassist_v1_aistudio']}
        style={{ width: '100%', height: '100%' }}
      >
        <BusinessLocationController onQuotaExceeded={onQuotaExceeded} />
      </Map>
    </div>
  );
}

export function LocationMap({ quotaExceeded }: { quotaExceeded: boolean }) {
  const [localQuotaError, setLocalQuotaError] = useState(false);

  const handleQuota = useCallback(() => {
    setLocalQuotaError(true);
  }, []);

  if (!MAPS_API_KEY) {
    return (
      <MapFallbackCard note="View our verified service location in Achunthanvayal, Ramanathapuram directly on Google Maps." />
    );
  }

  return (
    <APIProvider
      apiKey={MAPS_API_KEY}
      libraries={['places', 'marker']}
      language="en"
      region="IN"
    >
      <MapViewport
        quotaExceeded={quotaExceeded || localQuotaError}
        onQuotaExceeded={handleQuota}
      />
    </APIProvider>
  );
}
