// we always make sure 'react-native' gets included first
import * as ReactNative from "react-native"
import mockFile from "./mockFile"

// libraries to mock
jest.doMock("react-native", () => {
    // Extend ReactNative
    return Object.setPrototypeOf(
        {
            Image: {
                ...ReactNative.Image,
                resolveAssetSource: jest.fn((_source) => mockFile), // eslint-disable-line @typescript-eslint/no-unused-vars
                getSize: jest.fn(
                    (
                        _uri: string, // eslint-disable-line @typescript-eslint/no-unused-vars
                        success: (width: number, height: number) => void,
                        _failure?: (_error: any) => void, // eslint-disable-line @typescript-eslint/no-unused-vars
                    ) => success(100, 100),
                ),
            },
        },
        ReactNative,
    )
})

jest.mock("@react-native-async-storage/async-storage", () =>
    require("@react-native-async-storage/async-storage/jest/async-storage-mock"),
)

jest.mock("expo-localization", () => ({
    ...jest.requireActual("expo-localization"),
    getLocales: () => [{ languageTag: "en-US", textDirection: "ltr" }],
}))

declare global {
    let __TEST__: boolean
}
