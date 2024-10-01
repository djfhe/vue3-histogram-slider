import { MarkOption, Styles } from 'vue-3-slider-component';
import { DefineComponent, ComponentOptionsMixin, PublicProps, ComponentProvideOptions } from 'vue';
type MarkStyle = Omit<MarkOption, 'label'>;
interface Props {
    data: number[];
    min?: number;
    max?: number;
    step?: number;
    barWidth?: number;
    barGap?: number;
    barRadius?: number;
    holderColor?: string;
    colors?: string[];
    updateColorOnChange?: boolean;
    handleSize?: number;
    grid?: boolean;
    gridNum?: number;
    prettify?: (value: number) => string;
    labelStyle?: Styles;
    markStyle?: MarkStyle;
    processStyle?: Styles;
    tooltipStyle?: Styles;
    histSliderGap?: number;
    tooltip?: 'none' | 'always' | 'focus' | 'hover' | 'active';
}
declare let __VLS_typeProps: Props;
type __VLS_PublicProps = {
    modelValue: number;
} & typeof __VLS_typeProps;
declare const _default: DefineComponent<__VLS_PublicProps, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
    "update:modelValue": (modelValue: number) => any;
}, string, PublicProps, Readonly<__VLS_PublicProps> & Readonly<{
    "onUpdate:modelValue"?: ((modelValue: number) => any) | undefined;
}>, {
    labelStyle: Styles;
    step: number;
    barWidth: number;
    barGap: number;
    barRadius: number;
    holderColor: string;
    colors: string[];
    updateColorOnChange: boolean;
    handleSize: number;
    grid: boolean;
    gridNum: number;
    prettify: (value: number) => string;
    markStyle: MarkStyle;
    processStyle: Styles;
    tooltipStyle: Styles;
    histSliderGap: number;
    tooltip: "none" | "always" | "focus" | "hover" | "active";
}, {}, {}, {}, string, ComponentProvideOptions, false, {}, any>;
export default _default;
