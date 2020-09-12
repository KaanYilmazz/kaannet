import {HistoryEntity} from "../entities/History";

 class HistoryResponse {
    data: HistoryEntity[]
}

export function HistoryResponseProvider(): HistoryResponse {
    return {
        data: [
            {
                name: "85 -> İYİ",
                start: new Date("2020-09-11"),
                end: new Date("2020-09-12"),
                color: "green",
            },
            {
                name: "85 -> İYİ",
                start: new Date("2020-09-27"),
                end: new Date("2020-09-28"),
                color: "green",
            },
            {
                name: "85 -> İYİ",
                start: new Date("2020-09-06"),
                end: new Date("2020-09-07"),
                color: "green",
            },
            {
                name: "85 -> İYİ",
                start: new Date("2020-09-14"),
                end: new Date("2020-09-15"),
                color: "green",
            },
        ]
    }
}
