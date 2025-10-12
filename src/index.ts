import { declare } from '@babel/helper-plugin-utils';

export default declare((api) => {
    api.assertVersion(7);

    return {
        name: 'transform-variable-declarations-with-var',
        visitor: {
            VariableDeclaration(path) {
                if (['let', 'const'].includes(path.node.kind)) {
                    const scope = path.scope;
                    const bindings = path.getBindingIdentifiers();

                    for (const [name, binding] of Object.entries(bindings)) {
                        if (scope.hasBinding(name) && !scope.bindingIdentifierEquals(name, binding)) {
                            const newName = scope.generateUidIdentifier(name).name;
                            scope.rename(name, newName);
                        }
                    }

                    path.node.kind = 'var';
                }
            },
        },
    };
});
