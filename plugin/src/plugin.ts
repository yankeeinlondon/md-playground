import { createBuilder, code } from "vite-plugin-md";
import { pipe } from "fp-ts/lib/function";
import { createFragment, into} from "@yankeeinlondon/happy-wrapper";

export interface PlaygroundOptions {
    /**
     * Allows the default alignment of **component** and **code block** to be
     * specified as a default but individual blocks may still override this
     * default with use of the `align` property in the code block
     * 
     * @default "vertical"
     */
    align?: "horizontal" | "vertical";
}

export const playground = createBuilder("playground", "parser")
    .options<PlaygroundOptions>()
    .initializer(async (p, o) => {
        p.usesBuilder(code)
            .withConfig({
                after: (fence) => {
                    if(fence.props.playground) {
                        console.log("playground detected", fence.props);
                        
                        const component = createFragment(`<code-playground align="${o.align || fence.props.align || "vertical"}"  />`);
                        fence.codeBlockWrapper = pipe(fence.codeBlockWrapper, into(component));
                    } else {
                        console.log("no playground", fence.props);
                        
                    }

                    return fence;
                },
            });
        return p;
    })
    // don't think you even need a handler; effectively your "handler" taps into the code builder's after hook
    .handler(async p => p)
    .meta({
        description: "a builder API to extend vite-plugin-md to easily add interactive "
    });
