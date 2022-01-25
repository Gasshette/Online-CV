import React from 'react';
import './text-writer.scss';
import DOMPurify from 'dompurify';

interface ITextWriterState {
    writtenText: string,
    index: number;
}

const TextWriter = ({ text, speed }: { text: string, speed: number }) => {
    const initialState = { writtenText: '', index: 0 };
    const sanitizer = DOMPurify.sanitize; // Allow us to use dangerouslySetInnerHTML below with a clean DOM
    let animKey: any;

    const [state, setState] = React.useState<ITextWriterState>(initialState);

    React.useEffect(() => {
        animKey = setInterval(() => {
            if (state.index >= text.length - 1) {
                clearInterval(animKey);
            } else {
                setState(({ ...state, index: state.index + 1 }));
            }
        }, speed);

        return () => clearInterval(animKey);
    });

    React.useEffect(() => {
        setState(state => ({ ...state, writtenText: state.writtenText + text[state.index] }))
    }, [state.index]);

    // Reset the state when the text is changed
    React.useEffect(() => {
        if (state.writtenText.length > 0) {
            setState(initialState);
        }
    }, [text])

    return <div className="text-writer-component"><span className="text" dangerouslySetInnerHTML={{ __html: sanitizer(state.writtenText) }} /></div>
}

export default TextWriter;