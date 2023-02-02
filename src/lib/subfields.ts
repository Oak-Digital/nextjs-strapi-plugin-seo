type SubfieldsReturnType<Pre extends string, FieldNames extends readonly string[]> = {
    [K in keyof FieldNames]: `${Pre}.${FieldNames[K]}`;
};

export const subfields = <Prefix extends string, FieldsNames extends readonly string[]>(
    prefix: Prefix,
    fieldNames: FieldsNames
): SubfieldsReturnType<Prefix, FieldsNames> => {
    return fieldNames.map<`${Prefix}.${string}`>((fieldName) => `${prefix}.${fieldName}`) as SubfieldsReturnType<
        Prefix,
        FieldsNames
    >;
};
