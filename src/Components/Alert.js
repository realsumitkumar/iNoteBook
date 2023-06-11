import React from 'react'

export default function Alert(props) {

    const capitalize = (word) => {
        if (word === "danger") {
            word = "error"
        }
        if (word === undefined || word === null) {
            return ''
        }
        const lower = word.toLowerCase()
        return lower.charAt(0).toUpperCase() + lower.slice(1)
    }

    return (
        <div style={{ heigh: "200px" }}>
            {props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
                <strong>{capitalize(props.alert.type)}</strong> {props.alert.msg}
            </div>}
        </div>

    )
}
