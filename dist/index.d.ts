import * as vue from 'vue';
import * as vite_plugin_md from 'vite-plugin-md';

interface PlaygroundOptions {
    /**
     * Allows the default alignment of **component** and **code block** to be
     * specified as a default but individual blocks may still override this
     * default with use of the `align` property in the code block
     *
     * @default "vertical"
     */
    align?: "horizontal" | "vertical";
}
declare const playground: vite_plugin_md.BuilderApi<PlaygroundOptions, "parser">;

declare const CodePlayground: vue.DefineComponent<{}, {}, any, vue.ComputedOptions, vue.MethodOptions, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, {}, string, vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps, Readonly<vue.ExtractPropTypes<{}>>, {}>;

export { CodePlayground, playground as default };
