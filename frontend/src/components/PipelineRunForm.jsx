import { useState } from 'react'
import LoadingSpinner from './LoadingSpinner'
import styles from './PipelineRunForm.module.css'

const PROVIDERS = ['OxO', 'BioPortal']

function PipelineRunForm({ onSubmit, submitting }) {
    const [curies, setCuries] = useState('')
    const [provider, setProvider] = useState(PROVIDERS[0])

    return (
        <form className={styles.formContainer}>
            <div className={styles.inputGroup}>
                <label className={styles.label}>Mapping Provider</label>
                <select value={provider} onChange={e => setProvider(e.target.value)}>
                    {PROVIDERS.map(p => <option key={p}>{p}</option>)}
                </select>
            </div>
            <div className={styles.inputGroup}>
                <label className={styles.label}>CURIE</label>
                <input
                    type="text" 
                    value={curies}
                    onChange={e => setCuries(e.target.value)} 
                    disabled={submitting}
                />
            </div>
            
            <button 
                className={styles.submitButton}
                disabled={!curies || submitting}
                onClick={() => onSubmit(curies.trim(), provider)}
            >
                {submitting ? <LoadingSpinner /> : 'SUBMIT'}
            </button>
        </form>
    )
}

export default PipelineRunForm