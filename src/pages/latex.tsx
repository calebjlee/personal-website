// Embed PDF on the page
export default function EmbedLatexPDF() {
    return (
      <div>
        <h2>LaTeX PDF Preview</h2>
        <iframe
          src="/latex/Latex1.pdf"
          width="100%"
          height="800px"
          style={{ border: 'none' }}
        ></iframe>
      </div>
    );
  }
  