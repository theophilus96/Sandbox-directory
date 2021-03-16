import React, {useEffect}from 'react'
import useCompanyStorage from '../hooks/useCompanyStorage';

export default function CompanyProgressBar({ file, setFile , DocRefID}) {
    const { progress, url } = useCompanyStorage(file, DocRefID);

    useEffect(() => {
        if (url) {
          setFile(null);
        }
      }, [url, setFile]);
    
    return (
        <div>
            
        </div>
    )
}
