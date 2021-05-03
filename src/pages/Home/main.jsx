import React from 'react';
import Post from '../../components/Post';

export default () => {

    const test_data = ['Test post 1', 'Test post 2'];

    return(
        <div>

            {test_data.map((value, index) => {
                return <Post key={index} title={value} data={value} author={'yorgsyogurt'} date={'14.04.2021'} id={4} />
            })}

        </div>
    );

}