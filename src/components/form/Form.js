import React from 'react'
import './form.css'
import Button from '../button/Button'

function Form(props) {
    return (
        <div className="form">
            <form>
                {
                    props.formInputData && props.renderForm ? (
                        <React.Fragment>
                            {
                                props.formInputData.map((item, index) => props.renderForm(item, index))
                            }
                        </React.Fragment>
                    ) : null
                }

                <Button
                    width="fullWidth"
                    content={props.buttonContent}
                    onClickHandler={props.handleForm}
                />
            </form>
        </div>
    )
}

export default Form
