export interface Match {
    title: string,
    date: string,
    rating: number,
    wrestlers: {
        wrestler: {
            id: number,
            name: string,
            raking: number,
            organization: object,
            image: string
        }
    }
}
