import React from 'react';
import DOMPurify from 'dompurify';
import './text-writer.scss';

interface ITextWriterState {
    writtenText: string,
    index: number;
}

const TextWriter = ({ text, speed }: { text: string, speed: number }) => {
    const initialState = { writtenText: '', index: 0 };
    const sanitizer = DOMPurify.sanitize;

    const [state, setState] = React.useState<ITextWriterState>(initialState);

    React.useEffect(() => {
        if (state.index < text.length - 1) {
            const animKey = setInterval(() => {
                setState(state => {
                    if (state.index > text.length - 1) {
                        clearInterval(animKey);
                        return { ...state };
                    }
                    return {
                        writtenText: state.writtenText + text[state.index],
                        index: state.index + 1
                    };
                });
            }, speed);

            return () => clearInterval(animKey);
        }
    }, [state]);

    // Reset the state when the text is changed (Language change)
    React.useEffect(() => {
        if (text.length > 0) {
            setState(initialState);
        }
    }, [text])

    return <div className="text-writer-component"><span className="text" dangerouslySetInnerHTML={{ __html: sanitizer(state.writtenText) }} /></div>
}

export default TextWriter;