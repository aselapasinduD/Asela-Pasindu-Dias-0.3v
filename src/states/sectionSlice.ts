import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface SectionState{
    [key: string]: boolean;
}

const initialState: SectionState = {
    aboutMeSection: false,
    skillsSection: false,
    experiencesSection: false,
    projectsSection: false,
    contactSection: false,
    isWebsiteLoaded: false,
}

const sectionSlice = createSlice({
    name: 'section',
    initialState,
    reducers: {
        toggleSection: (state, action: PayloadAction<string>) => {
            const sectionID = action.payload;
            state[sectionID] = !state[sectionID];
        },
        openSection: (state, action: PayloadAction<string>) => {
            const sectionID = action.payload;
            state[sectionID] = true;
        },
        closeSection: (state, action: PayloadAction<string>) => {
            const sectionID = action.payload;
            state[sectionID] = false;
        }
    }
});

export const { toggleSection, openSection, closeSection} = sectionSlice.actions;
export default sectionSlice.reducer;