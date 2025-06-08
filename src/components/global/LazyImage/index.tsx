import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import styles from "./_styles.module.scss";

type LazyImageProps = {
  src: string;
  alt: string;
  effect?: "blur" | "opacity" | "black-and-white";
  width?: string;
  height?: string;
  onClick?: () => void;
  className?: string;
};

const LazyImage = ({
  src,
  alt,
  effect = "blur",
  width,
  height,
  onClick,
  className,
}: LazyImageProps) => {
  return (
    <LazyLoadImage
      src={src}
      alt={alt}
      width={width}
      height={height}
      effect={effect}
      className={`${styles.center_image} ${
        onClick ? styles.pointer : ""
      } ${className}`}
      onClick={onClick}
    />
  );
};

export default LazyImage;
