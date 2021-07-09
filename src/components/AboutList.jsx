import React, {Component} from 'react';

class AboutList extends Component {
    constructor() {
        super();
        this.infos = [
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias, sed!.',
            'Lorem ipsum dolor sit amet consectetur.',
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt laudantium laborum suscipit perspiciatis nobis ad.',
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt eligendi modi a.',
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt laudantium laborum suscipit. ',
        ];
    }
    render() {
        return (
            <ul className="about-list">
                {this.infos.map((info, index) => {
                    return (
                        <li key={index}><p>{info}</p></li>
                    )
                })}
            </ul>
        )
    }
}

export default AboutList;