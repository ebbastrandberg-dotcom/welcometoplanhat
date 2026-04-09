import { useMemo } from "react";
import { useScrollReveal } from "../hooks/useScrollReveal";
import { OFFICE_LOCATIONS } from "../data/content";

const W = 1000;
const H = 500;
const LAT_MAX = 80;
const LAT_MIN = -60;
const LAT_RANGE = LAT_MAX - LAT_MIN;
const STEP = 3;

// Simplified continent outlines as [lat, lng] polygons
const LAND: [number, number][][] = [
  // North America
  [
    [72, -168], [65, -168], [55, -162], [58, -150], [55, -135], [48, -125],
    [34, -120], [28, -115], [23, -110], [18, -105], [15, -95], [15, -83],
    [18, -88], [21, -87], [25, -80], [30, -82], [29, -90], [33, -95],
    [38, -75], [40, -73], [44, -68], [47, -64], [47, -55], [52, -56],
    [55, -60], [60, -64], [65, -58], [72, -55], [72, -168],
  ],
  // Greenland
  [
    [84, -18], [84, -55], [76, -58], [68, -55], [62, -44],
    [64, -18], [76, -18], [84, -18],
  ],
  // South America
  [
    [13, -82], [13, -35], [-3, -34], [-22, -42], [-34, -53],
    [-56, -68], [-48, -76], [-18, -70], [-5, -80], [5, -80], [13, -82],
  ],
  // Europe
  [
    [72, -10], [72, 32], [60, 30], [55, 25], [48, 30], [44, 28],
    [42, 30], [38, 28], [36, 0], [38, -10], [44, -10], [48, -6],
    [55, -6], [60, 5], [65, 12], [72, -10],
  ],
  // UK / Ireland
  [[50, -8], [50, 2], [56, 0], [59, -2], [59, -8], [54, -8], [50, -8]],
  // Africa
  [
    [36, -17], [36, 38], [30, 32], [20, 40], [10, 45], [0, 43],
    [-5, 40], [-34, 30], [-35, 18], [-15, 12], [5, 2], [5, -8],
    [15, -17], [36, -17],
  ],
  // Asia (with India traced as peninsula)
  [
    [72, 32], [72, 180], [65, 180], [60, 165], [55, 140], [50, 142],
    [44, 133], [36, 128], [30, 122], [22, 114], [10, 106], [2, 104],
    [6, 100], [10, 98], [16, 96], [22, 92], [28, 88],
    [22, 88], [10, 80], [8, 77], [12, 73], [20, 72],
    [26, 66], [30, 50], [38, 44], [42, 28], [48, 30],
    [55, 25], [60, 30], [72, 32],
  ],
  // Arabian Peninsula
  [[30, 34], [30, 56], [22, 56], [14, 44], [20, 40], [30, 32], [30, 34]],
  // SE Asia islands
  [[0, 96], [0, 118], [-8, 118], [-8, 110], [-4, 96], [0, 96]],
  [[0, 120], [0, 142], [-5, 142], [-8, 132], [-4, 120], [0, 120]],
  // Australia
  [
    [-12, 114], [-12, 143], [-18, 148], [-28, 154], [-38, 148],
    [-38, 136], [-32, 116], [-20, 114], [-12, 114],
  ],
  // Japan
  [[32, 130], [36, 136], [40, 140], [44, 146], [42, 145], [36, 134], [32, 130]],
  // New Zealand
  [[-34, 172], [-34, 178], [-47, 168], [-47, 166], [-38, 172], [-34, 172]],
];

const LABEL_CFG: Record<string, { dx: number; dy: number; anchor: string }> = {
  Stockholm: { dx: 8, dy: 4, anchor: "start" },
  Amsterdam: { dx: 8, dy: 4, anchor: "start" },
  London: { dx: -8, dy: 4, anchor: "end" },
  "New York": { dx: 8, dy: 4, anchor: "start" },
  Boston: { dx: 8, dy: -3, anchor: "start" },
  Atlanta: { dx: 8, dy: 4, anchor: "start" },
  Indianapolis: { dx: -8, dy: 4, anchor: "end" },
  Toronto: { dx: -8, dy: -4, anchor: "end" },
  "Los Angeles": { dx: -8, dy: 4, anchor: "end" },
};

function project(lat: number, lng: number): [number, number] {
  return [(lng + 180) / 360 * W, (LAT_MAX - lat) / LAT_RANGE * H];
}

function pointInPoly(lat: number, lng: number, poly: [number, number][]): boolean {
  let inside = false;
  for (let i = 0, j = poly.length - 1; i < poly.length; j = i++) {
    const [yi, xi] = poly[i];
    const [yj, xj] = poly[j];
    if (
      yi > lat !== yj > lat &&
      lng < ((xj - xi) * (lat - yi)) / (yj - yi) + xi
    ) {
      inside = !inside;
    }
  }
  return inside;
}

function isLand(lat: number, lng: number): boolean {
  return LAND.some((poly) => pointInPoly(lat, lng, poly));
}

export default function Offices() {
  const ref = useScrollReveal<HTMLElement>();

  const landDots = useMemo(() => {
    const dots: [number, number][] = [];
    for (let lat = LAT_MAX - 1; lat > LAT_MIN; lat -= STEP) {
      for (let lng = -180 + 1; lng < 180; lng += STEP) {
        if (isLand(lat, lng)) {
          dots.push(project(lat, lng));
        }
      }
    }
    return dots;
  }, []);

  const offices = OFFICE_LOCATIONS.map((o) => {
    const [x, y] = project(o.lat, o.lng);
    const cfg = LABEL_CFG[o.city] ?? { dx: 8, dy: 4, anchor: "start" };
    return { ...o, x, y, ...cfg };
  });

  return (
    <section ref={ref} className="reveal bg-bg py-20 md:py-28">
      <div className="max-w-[1100px] mx-auto px-6 md:px-12">
        <span className="uppercase text-muted text-[0.72rem] tracking-[0.15em] mb-10 block">
          Where we are
        </span>

        <svg
          viewBox={`0 0 ${W} ${H}`}
          className="w-full h-auto"
          role="img"
          aria-label="World map showing Planhat office locations"
        >
          {landDots.map(([x, y], i) => (
            <circle
              key={i}
              cx={x}
              cy={y}
              r={1.3}
              fill="rgba(255,255,255,0.1)"
            />
          ))}

          {offices.map((o) => (
            <g key={o.city}>
              <circle cx={o.x} cy={o.y} r={7} fill="rgba(255,255,255,0.06)" />
              <circle cx={o.x} cy={o.y} r={3} fill="white" opacity={0.9}>
                <animate
                  attributeName="opacity"
                  values="0.9;1;0.9"
                  dur="3s"
                  repeatCount="indefinite"
                />
              </circle>
              <text
                x={o.x + o.dx}
                y={o.y + o.dy}
                textAnchor={o.anchor}
                fill="rgba(255,255,255,0.5)"
                fontSize={9}
                fontFamily="Inter, sans-serif"
                className="hidden sm:block"
              >
                {o.city}
              </text>
            </g>
          ))}
        </svg>
      </div>
    </section>
  );
}
