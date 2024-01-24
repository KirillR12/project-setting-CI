type Mods = Record<string, boolean | boolean>

export function classNames(cls: string, mods?: Mods, addition:string[] = []):string {
    return [
        cls,
        ...addition,
        Object.entries(mods)
            .filter(([_, value]) => Boolean(value))
            .map(([className]) => className),
    ].join(' ')
}
