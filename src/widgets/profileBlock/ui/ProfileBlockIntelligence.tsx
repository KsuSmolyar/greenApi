import { useCallback, useEffect, useState } from "react";
import { InlineInput } from "../../../entities/InlineInput";
import { debounce } from "../../../shared/utils/debounce";
import { INTELLIGENCE_DEFAULT, LOCAL_STORAGE_INTELLIGENCE } from "../../../shared/constants";

export const ProfileBlockIntelligence = () => {

    const [intelligence, setIntelligence] = useState(INTELLIGENCE_DEFAULT)

    const debouncedChangeIntelligence = useCallback(debounce((value: string) => {
        setIntelligence(value)
    }, 500), [])

    const handleChangeIntelligence = (value: string) => {
        debouncedChangeIntelligence(value)
    }

    const handleEditedIntelligence = () => {
        localStorage.setItem(LOCAL_STORAGE_INTELLIGENCE, intelligence)
    }

    useEffect(() => {
        const intelligenceFromLs = localStorage.getItem(LOCAL_STORAGE_INTELLIGENCE);
        setIntelligence(intelligenceFromLs || INTELLIGENCE_DEFAULT);
    }, [])

    return (
        <InlineInput
            value={intelligence}
            handleInputChange={handleChangeIntelligence}
            label={"Сведения"}
            handleEditedClick={handleEditedIntelligence}
        />
    )
}
