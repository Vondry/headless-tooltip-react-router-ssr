import {
    type TooltipProps as HeadlessTooltipProps,
    Tooltip as HTooltip,
} from 'headless-tooltip';
import {useLayoutEffect, useState} from "react";

// This is workaround that imports tooltip on client and on server just renders children
export const SSR_HeadlessTooltip = (props: HeadlessTooltipProps) => {
    const [HeadlessTooltip, setHeadlessTooltip] = useState<
        typeof HTooltip | null
    >(null);

    useLayoutEffect(() => {
        import('headless-tooltip').then((mod) =>
            setHeadlessTooltip(() => mod.default),
        );
    }, []);

    if (!HeadlessTooltip) {
        return props.children;
    }

    return <HeadlessTooltip {...props} />;
};
