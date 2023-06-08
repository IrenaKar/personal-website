import React, { FunctionComponent, ReactElement } from "react";
import { ProjectCardDetailsProps } from "./ProjectCardDetails.types";

const ProjectCardDetails:FunctionComponent<ProjectCardDetailsProps> = ({longDescription}): ReactElement => {
    const description = longDescription;

    return <div className="p-3 text-stone-600 text-sm">
        {description}
    </div>
}

export default ProjectCardDetails;