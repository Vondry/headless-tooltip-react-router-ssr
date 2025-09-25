import Tooltip, {type TooltipProps} from "headless-tooltip";
import {SSR_HeadlessTooltip} from "~/components/SSR_HeadlessTooltip";

const commonProps: TooltipProps = {
    content: <span>This is a tooltip message</span>,
    placement: "bottom",
    arrow: true,
    className: "max-w-80 rounded-lg bg-gray-900 px-3 py-2 text-xs font-normal text-white",
    arrowClassName: "bg-gray-900",
    children: <button className="px-4 py-2 bg-blue-500 text-white rounded cursor-pointer">
        Hover me
    </button>
} as const

export function TooltipHomepage() {
    return (
        <main className="flex items-center justify-center pt-16 pb-4 gap-6">
            <SSR_HeadlessTooltip {...commonProps}/>

            {/* UNCOMMENT BELOW AND REFRESH BROWSER TO GET SSR ERROR */}
            <Tooltip {...commonProps} />
        </main>
    );
}


