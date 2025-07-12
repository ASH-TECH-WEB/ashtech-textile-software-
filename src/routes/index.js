// import { Router } from 'express';

// import agentRoutes from './agent.routes.js';
// import FinalTrialBalance from './FinalTrialBalance.routes.js';
// import incentiveRoutes from './incentive.routes.js';
// import newPartyRoutes from './newParty.routes.js';
// import partyNameRoutes from './partyName.routes.js';
// import selfIdRoutes from './selfId.routes.js';
// import thirdPartyRoutes from './ThirdParty.routes.js';
// import userSettingsRoutes from './userSettings.routes.js';

// const router = Router();

// router.use('/agent', agentRoutes);
// router.use('/final-trial-balance', FinalTrialBalance);
// router.use('/incentives', incentiveRoutes);
// router.use('/new-party', newPartyRoutes);
// router.use('/party-name', partyNameRoutes);
// router.use('/self-id', selfIdRoutes);
// router.use('/third-party', thirdPartyRoutes);
// router.use('/user-settings', userSettingsRoutes);

// export default router;



import { Router } from 'express';

// import agentRoutes from './agent.routes.js';
import finalTrialBalanceRoutes from './FinalTrialBalance.routes.js';
// import incentiveRoutes from './incentive.routes.js';
// import newPartyRoutes from './newParty.routes.js';
// import partyNameRoutes from './partyName.routes.js';
// import selfIdRoutes from './selfId.routes.js';
// import thirdPartyRoutes from './ThirdParty.routes.js';
// import userSettingsRoutes from './userSettings.routes.js';

const router = Router();

// router.use('/agent', agentRoutes);
router.use('/final-trial-balance', finalTrialBalanceRoutes);
// router.use('/incentives', incentiveRoutes);
// router.use('/new-party', newPartyRoutes);
// router.use('/party-name', partyNameRoutes);
// router.use('/self-id', selfIdRoutes);
// router.use('/third-party', thirdPartyRoutes);
// router.use('/user-settings', userSettingsRoutes);

export default router;
