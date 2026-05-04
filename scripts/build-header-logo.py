#!/usr/bin/env python3
"""Build a wide, short header logo from the square WhatsApp export (trim + scale)."""
from __future__ import annotations

from pathlib import Path

from PIL import Image


def tight_bbox(img: Image.Image, thresh: int = 238) -> tuple[int, int, int, int] | None:
    """Bounding box of pixels that are not near-white."""
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
    pad = 2
    return (
        max(0, min_x - pad),
        max(0, min_y - pad),
        min(w, max_x + pad + 1),
        min(h, max_y + pad + 1),
    )


def main() -> None:
    root = Path(__file__).resolve().parents[1]
    src = (
        root
        / "public/images/wp-content__uploads__2023__11__WhatsApp-Image-2025-06-14-at-6.37.54-PM.jpeg"
    )
    out_png = root / "public/images/jks-brand-mark-header.png"
    im = Image.open(src)
    box = tight_bbox(im) or (0, 0, im.width, im.height)
    cropped = im.crop(box).convert("RGB")

    target_h = 56
    scale = target_h / cropped.height
    new_w = max(1, int(round(cropped.width * scale)))
    new_h = target_h
    out = cropped.resize((new_w, new_h), Image.Resampling.LANCZOS)
    out.save(out_png, format="PNG", optimize=True)
    print(f"Wrote {out_png} ({out.width}x{out.height}) from crop {box}")


if __name__ == "__main__":
    main()
