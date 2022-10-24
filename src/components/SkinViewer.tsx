import React, { MutableRefObject, useEffect, useRef } from "react";
import * as skinview3d from "skinview3d";
type Props = {
  height: number;
  width: number;
  animation: string;
  speed: number;
  cape: boolean;
};

export default function SkinViewer({
  height,
  width,
  animation,
  speed,
  cape,
}: Props) {
  const skinContainer = useRef() as MutableRefObject<HTMLCanvasElement>;
  useEffect(() => {
    let skinViewer = new skinview3d.SkinViewer({
      canvas: skinContainer.current,
      width: height,
      height: width,
      skin: "https://crafatar.com/skins/2d9070a8-8731-40a5-bf73-052b6e55b708",
    });

    skinViewer.autoRotate = true;
    skinViewer.animation =
      animation == "walk"
        ? new skinview3d.WalkingAnimation()
        : new skinview3d.RunningAnimation();
    skinViewer.animation.speed = speed;
    skinViewer.autoRotateSpeed = 0.2;

    if (cape) {
      skinViewer.loadCape(
        "https://crafatar.com/capes/2d9070a8-8731-40a5-bf73-052b6e55b708"
      );
    }
  }, []);

  return <canvas id="skin_container" ref={skinContainer}></canvas>;
}
