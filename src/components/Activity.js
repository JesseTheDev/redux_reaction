import React from 'react'

import {Card, CardActions, CardHeader, CardTitle, CardText} from 'material-ui/Card'
import FlatButton from 'material-ui/FlatButton'

const Activity = ({ item }) => (
    <Card style={{marginBottom: '15px'}}>
        <CardHeader
            title={item.user.name}
            subtitle={item.user.company.name}
            avatar={'https://ventureapp.imgix.net/avatars/'+item.user.avatar_url+'?fit=clip&w=100&h=100'}
        />
        <CardTitle title={item.actionable.title} subtitle={item.actionable.description} />
        {item.actionable.participants && <CardText>
            with: {
                item.actionable.participants.map((participant, key) => {
                    return <span key={key}>{participant.user.name + (key !== item.actionable.participants.length - 1 ? ', ' : '')}</span>
                })
            }
        </CardText>}
        <CardActions>
            <FlatButton label="Reply" />
            <FlatButton label="Share" />
        </CardActions>
    </Card>
)

/* I'm a loser and don't have proptypes yet */

export default Activity
