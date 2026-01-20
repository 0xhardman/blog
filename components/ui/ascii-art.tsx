interface AsciiArtProps {
    art: string;
    className?: string;
}

/**
 * Component for displaying ASCII art with proper formatting.
 * Uses Courier New which has consistent character widths for ASCII art.
 */
export function AsciiArt({ art, className = "" }: AsciiArtProps) {
    return (
        <pre
            className={`leading-tight whitespace-pre select-none ${className}`}
            style={{
                fontFamily: '"Courier New", Courier, "Lucida Console", Monaco, monospace',
            }}
            aria-hidden="true"
        >
            {art}
        </pre>
    );
}
