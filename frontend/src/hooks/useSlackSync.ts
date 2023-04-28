import { useSyncSlackIntegrationMutation } from '@graph/hooks'
import { namedOperations } from '@graph/operations'
import { useProjectId } from '@hooks/useProjectId'
import { useState } from 'react'

export function useSlackSync() {
	const [slackLoading, setSlackLoading] = useState(false)
	const { projectId } = useProjectId()

	const [syncSlackIntegration] = useSyncSlackIntegrationMutation({
		variables: {
			project_id: projectId,
		},
		refetchQueries: [namedOperations.Query.GetAlertsPagePayload],
	})

	const syncSlackThrottle = async () => {
		await syncSlackIntegration()
		setSlackLoading(false)
	}

	const syncSlack = () => {
		setSlackLoading(true)
		syncSlackThrottle()
	}

	return {
		slackLoading,
		syncSlack,
	}
}
