import {reducer} from "./redux/message/reducers";
import {ADD_MESSAGE} from "./redux/message/types";

describe('Messages reducer', () => {
    it('should return the initial state, empty', () => {
        expect(reducer(undefined, {})).toEqual({"messages": []})
    })

    it('should handle ADD_MESSAGE and store every message', () => {
        expect(
            reducer({"messages": []}, {
                type: ADD_MESSAGE,
                payload: {
                    message: 'Hey',
                    author: 'Me',
                    id: 1,
                }
            })
        ).toEqual({
            "messages": [
                {
                    id: 1,
                    message: 'Hey',
                    author: 'Me'
                }
            ]
        });

        expect(
            reducer(
                {
                    "messages": [{
                        id: 1,
                        message: 'Hey',
                        author: 'Me'
                    }]
                }
                ,
                {
                    type: ADD_MESSAGE,
                    payload: {
                        message: 'Hey again',
                        author: 'Me again',
                        id: 2,
                    }
                }
            )
        ).toEqual({
            "messages":
                [
                    {
                        id: 1,
                        message: 'Hey',
                        author: 'Me'
                    },
                    {
                        id: 2,
                        message: 'Hey again',
                        author: 'Me again'
                    }
                ]
        })
    })
})