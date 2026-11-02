import directory from './programs.json'

// Public, read-only immigration-program content. Keep the editable data in
// programs.json so official links and stream status can be reviewed in one place.
export const publicPrograms = directory.programs
export const publicProgramOrder = directory.order
export const federalProgram = publicPrograms.federal
export const ontarioProgram = publicPrograms.ontario
