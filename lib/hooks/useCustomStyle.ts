import { computed } from 'vue';

const useCustomStyle = (position: any, offset: any) => {
  const customStyle = computed(() => {
    switch (position) {
      case "top-left":
        return {
          left: "0",
          top: `${offset}px`,
        };
      case "bottom-left":
        return {
          left: "0",
          bottom: `${offset}px`,
        };
      case "bottom-right":
        return {
          right: "0",
          bottom: `${offset}px`,
        };
      case "top-center":
        return {
          top: `${offset}px`,
          left: "0",
          right: "0",
          marginRight: "auto",
          marginLeft: "auto",
        };
      case "bottom-center":
        return {
          bottom: `${offset}px`,
          left: "0",
          right: "0",
          marginRight: "auto",
          marginLeft: "auto",
        };
      default:
        return {
          right: "0",
          top: `${offset}px`,
        };
    }
  });
  return {customStyle}
}

export default useCustomStyle