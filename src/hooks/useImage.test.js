import { renderHook } from '@testing-library/react'
// Config
import appConfig from "../config";

import useImage from "./useImage";


describe('useGoogleMap', () => {
    test('It returns empty value is initialized with empty', () => {
        const { result } = renderHook(() => {
            return useImage('')
        })
        expect(result.current).toEqual(``)
    });
    test('It returns correct value as expected', () => {
        const { result } = renderHook(() => {
            return useImage('/test.jpeg','w1280')
        })
        expect(result.current).toEqual(`${appConfig.IMAGE_BASE_URL}/w1280/test.jpeg`)
    });
});