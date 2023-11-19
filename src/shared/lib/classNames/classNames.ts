
export type Mods = Record<string, boolean | string | undefined>;

export function classNames(
    cls: string, 
    mods: Mods = {}, 
    additional: Array<string | undefined> = []
): string {
    return [
        cls,
        ...additional.filter(Boolean),
        ...Object.entries(mods)
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            .filter(([classNames, value]) => Boolean(value))
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            .map(([classNames,value]) => classNames)
    ]
        .join(' ');
}
