#!/usr/bin/env python3
"""Build a wide header logo with full lockup (stem + motto)."""
from __future__ import annotations

from pathlib import Path

from PIL import Image


def tight_bbox(img: Image.Image, thresh: int = 238) -> tuple[int, int, int, int] | None:
    rgb = img.convert("RGB")
    px = rgb.load()
    w, h = rgb.size
    min_x, min_y = w, h
    max_x, max_y = 0, 0
    found = False
    for y in range(h):
        for x in range(w):
            r, g, b = px[x, y]
            if r < thresh or g < thresh or b < thresh:
                found = True
                min_x = min(min_x, x)
                max_x = max(max_x, x)
                min_y = min(min_y, y)
                max_y = max(max_y, y)
    if not found:
        return None
    return min_x, min_y, max_x + 1, max_y + 1


def main() -> None:
    root = Path(__file__).resolve().parents[1]
    src = root / "public/images/jks-logo-light.png"
    out_png = root / "public/images/jks-logo-header.png"
    im = Image.open(src).convert("RGB")
    box = tight_bbox(im) or (0, 0, im.width, im.height)
    left, top, right, bottom = box

    # Extra padding so maple stem + motto line are never clipped
    pad_left = 14
    pad_top = 10
    pad_right = 10
    pad_bottom = 8
    cropped = im.crop(
        (
            max(0, left - pad_left),
            max(0, top - pad_top),
            min(im.width, right + pad_right),
            min(im.height, bottom + pad_bottom),
        )
    )

    target_h = 152  # 2x retina; shown at ~76px in header
    scale = target_h / cropped.height
    new_w = max(1, int(round(cropped.width * scale)))
    out = cropped.resize((new_w, target_h), Image.Resampling.LANCZOS)
    out.save(out_png, format="PNG", optimize=True)
    print(f"Wrote {out_png} ({out.width}x{out.height}) from crop {box}")


if __name__ == "__main__":
    main()
