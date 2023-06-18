import React from 'react';
import './grid.css';

class Grid extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [
        ['✓', '✓', '✓', '✓', '✓', '✓', '✓'],
        ['✓', '✓', '✗', '✓', '✓', '✓', '✓'],
        ['✓', '✗', '✓', '✓', '✓', '✓', '✓'],
        ['✓', '✗', '✓', '✓', '✓', '✓', '✓'],
        ['✓', '✗', '✓', '✓', '✓', '✓', '✓'],
        ['✓', '✗', '✓', '✓', '✓', '✓', '✓'],
        ['✓', '✗', '✓', '✓', '✓', '✓', '✓'],
        ['✓', '✗', '✓', '✓', '✓', '✓', '✓'],
        ['✓', '✗', '✓', '✓', '✓', '✓', '✓'],
        ['✓', '✗', '✓', '✓', '✓', '✓', '✓'],
      ],
    };
  }

  render() {
    const { data } = this.state;

    return (
      <div className="grid">
        <table>
          <thead>
            <tr>
              <th></th>
              <th>Title</th>
              <th>Powered By</th>
              <th>Co-powered By</th>
              <th>Hiring Partner</th>
              <th>Gold</th>
              <th>Silver</th>
              <th>Bronze</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, rowIndex) => (
              <tr key={`row-${rowIndex}`}>
                <th>{rowIndex === 0 ? 'Mention in sponsor standee and Event Brochure' : rowIndex === 1 ? 'Social Media Mention' : rowIndex===2 ? 'Concession Stall' : rowIndex===3 ? 'Can distribute their swags' : rowIndex===4? 'Dedicated Standee and Flex' : rowIndex===5 ? 'Access to Hacker Resumes' : rowIndex===6? 'Represenative in Judges Panel' : rowIndex===7? 'Opportunity to offer their own Problem Statemnt': rowIndex===8? 'Provide their mentors for guidance' :  'Year long publicity in all tech events'}</th>
                {row.map((cell, colIndex) => (
                  <td key={`cell-${rowIndex}-${colIndex}`}>
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Grid;
