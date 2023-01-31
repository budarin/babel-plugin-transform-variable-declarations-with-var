import { declare } from '@babel/helper-plugin-utils';

export default declare((api) => {
    api.assertVersion(7);

    return {
        name: 'transform-variable-declarations-with-var',
        visitor: {
            VariableDeclaration: {
                enter(path): void {
                    if (path.node.kind !== 'var') {
                        path.node.kind = 'var';
                    }
                },
            },
        },
    };
});
