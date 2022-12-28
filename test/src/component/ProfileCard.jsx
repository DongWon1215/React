import React from "react";
import Card from "./Card";

function ProfileCard(props)
{
    return (
        <Card title="김도" backgroundColor={'green'}>
            <p>안녕 하세요</p>
            <p>저는 만화가 입니다</p>
        </Card>
    )
}

export default ProfileCard;