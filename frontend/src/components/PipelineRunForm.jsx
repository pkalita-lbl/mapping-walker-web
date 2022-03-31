import { useState } from 'react'
import LoadingSpinner from './LoadingSpinner'
import styles from './PipelineRunForm.module.css'

function PipelineRunForm({ onSubmit, submitting }) {
    const [curies, setCuries] = useState('')

    return (
        <div className={styles.formContainer}>
            <input 
                className={styles.curieInput} 
                type="text" 
                value={curies}
                onChange={e => setCuries(e.target.value)} 
                disabled={submitting}
            />
            <button 
                className={styles.submitButton}
                disabled={!curies || submitting}
                onClick={() => onSubmit(curies.trim())}
            >
                {submitting ? <LoadingSpinner /> : 'SUBMIT'}
            </button>
        </div>
    )
}

export default PipelineRunForm