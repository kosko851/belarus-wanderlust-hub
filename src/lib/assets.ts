import mir from "@/assets/hero-mir-castle.jpg";
import nesvizh from "@/assets/nesvizh-castle.jpg";
import forest from "@/assets/belovezhskaya.jpg";
import minsk from "@/assets/minsk.jpg";
import lakes from "@/assets/braslav-lakes.jpg";
import brest from "@/assets/brest-fortress.jpg";

export const assetMap = {
  mir,
  nesvizh,
  forest,
  minsk,
  lakes,
  brest,
} as const;

export type AssetKey = keyof typeof assetMap;

export function resolveImage(imgKey?: AssetKey, externalUrl?: string): string {
  if (externalUrl) return externalUrl;
  if (imgKey) return assetMap[imgKey];
  return mir;
}
