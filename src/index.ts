import * as ts from "typescript";


const { factory, createPrinter } = ts

const interface1 = factory.createInterfaceDeclaration(
    undefined,
    [factory.createModifier(ts.SyntaxKind.ExportKeyword)],
    factory.createIdentifier('TestA'),
    undefined,
    undefined,
    [
        factory.createPropertySignature(
            undefined,
            factory.createIdentifier('age'),
            undefined,
            factory.createKeywordTypeNode(ts.SyntaxKind.NumberKeyword)
        )
    ]
)

const genCode = (node: ts.Node, fileName: string) => {
    const printer = createPrinter();
    const resultFile = ts.createSourceFile(fileName, '', ts.ScriptTarget.Latest, false, ts.ScriptKind.TS);
    const result = printer.printNode(
        ts.EmitHint.Unspecified,
        node,
        resultFile
    );
    return result;
}

console.log(genCode(interface1, 'a.ts'))
