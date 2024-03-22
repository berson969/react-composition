import { ReactNode } from "react";

export interface CollapseProps {
    collapsedLabel?: string,
    expandedLabel?: string,
    children: ReactNode[]
}