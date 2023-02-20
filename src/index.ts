import * as t from '@babel/types';
import { declare } from '@babel/helper-plugin-utils';

const VAR = 'var';

export default declare((api) => {
    api.assertVersion(7);

    return {
        name: 'transform-variable-declarations-with-var',
        visitor: {
            VariableDeclaration: {
                exit(path): void {
                    let bindings = [] as string[];
                    let scope = path.scope.parent;

                    while (scope) {
                        const keys = Object.keys(scope.bindings);
                        if (keys.length) {
                            bindings = [...bindings, ...keys];
                        }
                        scope = scope.parent;
                    }

                    path.node.declarations.forEach((vd) => {
                        const name = (vd.id as t.Identifier).name;
                        if (bindings.includes(name)) {
                            path.scope.rename(name);
                        }
                    });

                    if (path.node.kind !== VAR) {
                        path.node.kind = VAR;
                    }
                },
            },
        },
    };
});
