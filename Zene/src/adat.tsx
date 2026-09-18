export type Stilus = 'Jazz' | 'Pop' | 'Kpop' | 'Rap'

export interface ZeneTipus {
    readonly id: number
    nev: string
    eloado: string
    stilus: Stilus
    meme: boolean
}

export const ZENELISTA: ZeneTipus[] = [
    {
        id: 1,
        nev: "Billie Jean",
        eloado: "Michael Jackson",
        stilus: "Pop",
        meme: false
    },
    {
        id: 2,
        nev: "Dynamite",
        eloado: "BTS",
        stilus: "Kpop",
        meme: false
    },
    {
        id: 3,
        nev: "Still D.R.E.",
        eloado: "Dr. Dre",
        stilus: "Rap",
        meme: false
    },
    {
        id: 4,
        nev: "What a Wonderful World",
        eloado: "Louis Armstrong",
        stilus: "Jazz",
        meme: false
    },
    {
        id: 5,
        nev: "Never Gonna Give You Up",
        eloado: "Rick Astley",
        stilus: "Pop",
        meme: true
    },
    {
        id: 6,
        nev: "Gangnam Style",
        eloado: "PSY",
        stilus: "Kpop",
        meme: true
    },
    {
        id: 7,
        nev: "Lose Yourself",
        eloado: "Eminem",
        stilus: "Rap",
        meme: false
    },
    {
        id: 8,
        nev: "Fly Me to the Moon",
        eloado: "Frank Sinatra",
        stilus: "Jazz",
        meme: false
    },
    {
        id: 9,
        nev: "Blinding Lights",
        eloado: "The Weeknd",
        stilus: "Pop",
        meme: false
    },
    {
        id: 10,
        nev: "God's Menu",
        eloado: "Stray Kids",
        stilus: "Kpop",
        meme: true
    }
]