import React from 'react';
import { Card } from 'antd';

const { Meta } = Card;

export default ({title, data, author, date, id}) => {

    return(
        <>
            <Card title={title} style={{marginBottom:'16px'}} extra={date}>
                <p>
                    {data}
                </p>
                <Meta title = {<a href={`/profile/${id}`}>{author}</a>}/>
            </Card>
        </>
    );

}