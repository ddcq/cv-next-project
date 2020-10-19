import useWindowSize from "./use-window-size";

type useScreenInfoType = {
	isDesktop: boolean;
};

function useScreenInfo(): useScreenInfoType {
	const { width = 0 } = useWindowSize();
	return {
		isDesktop: width >= 1024,
	};
}

export default useScreenInfo;
