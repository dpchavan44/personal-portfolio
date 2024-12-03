// Function to split response into sections and parse them
// Function to parse the input text and return structured data
const parseText = (text) => {
    // Splitting the text by lines and filtering out empty lines
    const lines = text.split('\n').filter((line) => line.trim() !== '');
    
    return lines.map((line) => {
      // Handle numbered lists with bold sub-headings (e.g., 1. **Component**: Description)
      const numberedListMatch = line.match(/^(\d+)\.\s\*\*(.*?)\*\*:(.*)/);
      if (numberedListMatch) {
        return {
          type: 'numberedWithBoldSubHeading',
          content: {
            number: numberedListMatch[1],
            subHeading: numberedListMatch[2], // Extract bolded subheading text
            description: numberedListMatch[3].trim(), // Remaining description text
          },
        };
      }
  
      // Handle sections or headers (could include simple text or bold text)
      if (line.startsWith('**')) {
        return {
          type: 'section',
          content: line.trim().replace(/^\*\*(.*?)\*\*$/, '$1'), // Remove the bold formatting
        };
      }
  
      // Identify bullet points (lines starting with '*')
      if (line.startsWith('*')) {
        return {
          type: 'bullet',
          content: line.trim().replace(/^\*\s*/, ''), // Remove the bullet character and space
        };
      }
  
      // Handle plain paragraphs
      return {
        type: 'paragraph',
        content: line.trim(),
      };
    });
  };

  export const getFormatedResult = (data) => {
    const parsedData = parseText(data);

    return (
        <div className="space-y-2">
            {/* Render parsed data in the order received */}
            {parsedData.map((item, index) => {
                switch (item.type) {
                case 'section':
                    return <h3 key={index}>{item.content}</h3>;
                case 'paragraph':
                    return <p key={index} className="font-normal">{item.content}</p>;
                case 'numberedWithBoldSubHeading':
                    return (
                    <ol key={index}>
                        <li>
                        <strong>{item.content.number}. {item.content.subHeading}</strong>: {item.content.description}
                        </li>
                    </ol>
                    );
                case 'bullet':
                    return (
                    <ul key={index}>
                        <li>{item.content}</li>
                    </ul>
                    );
                default:
                    return null;
                }
            })}
        </div>
    );
};