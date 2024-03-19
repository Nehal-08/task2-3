type Data = {
        jobName: string;
        status: 'completed' | 'cancelled' | 'scheduled';
        revenue: number;
        outstanding: number;
        membership: boolean;
        location: string;
        type: string;
}
export const companyData: Data[] = [
        {"jobName": "Job 1", "status": "completed", "revenue": 5447.302475893063, "outstanding": 326.2610170693053, "membership": false, "location": "Seattle", "type": "pump"},
        {"jobName": "Job 2", "status": "scheduled", "revenue": 3571.7718273569647, "outstanding": 689.0010364760691, "membership": true, "location": "New York", "type": "fire-extinguisher"},
        {"jobName": "Job 3", "status": "completed", "revenue": 5417.661991871688, "outstanding": 82.93150712105355, "membership": true, "location": "Social Circle", "type": "alarm-system"},
        {"jobName": "Job 4", "status": "cancelled", "revenue": 4775.536657723487, "outstanding": 108.27147259092544, "membership": false, "location": "London", "type": "fire-extinguisher"},
        {"jobName": "Job 5", "status": "scheduled", "revenue": 5108.193778375649, "outstanding": 747.2278638039386, "membership": false, "location": "Snohomish", "type": "diagnosis"},
        {"jobName": "Job 6", "status": "completed", "revenue": 4829.029202310144, "outstanding": 92.08684513919688, "membership": false, "location": "Malibu", "type": "backflow testing"},
        {"jobName": "Job 7", "status": "cancelled", "revenue": 5072.499076073125, "outstanding": 887.0121329383797, "membership": true, "location": "Seattle", "type": "pump"},
        {"jobName": "Job 8", "status": "cancelled", "revenue": 5193.92424081953, "outstanding": 666.8784844524669, "membership": true, "location": "New York", "type": "alarm-system"},
        {"jobName": "Job 9", "status": "scheduled", "revenue": 5473.878730713991, "outstanding": 105.57106464958691, "membership": false, "location": "Everett", "type": "backflow testing"},
        {"jobName": "Job 10", "status": "completed", "revenue": 5210.862171393196, "outstanding": 509.15457088714705, "membership": false, "location": "Social Circle", "type": "fire-extinguisher"},
        {"jobName": "Job 11", "status": "cancelled", "revenue": 5092.394054527103, "outstanding": 475.0564432620736, "membership": true, "location": "Malibu", "type": "fire-extinguisher"},
        {"jobName": "Job 12", "status": "cancelled", "revenue": 5171.585367204095, "outstanding": 797.949272314729, "membership": false, "location": "London", "type": "fire-extinguisher"},
        {"jobName": "Job 13", "status": "completed", "revenue": 5402.336640745621, "outstanding": 738.8272002862881, "membership": false, "location": "Seattle", "type": "alarm-system"},
        {"jobName": "Job 14", "status": "completed", "revenue": 5223.291118341227, "outstanding": 24.636839989927964, "membership": true, "location": "London", "type": "pump"},
        {"jobName": "Job 15", "status": "scheduled", "revenue": 5390.991494091049, "outstanding": 48.12803385620278, "membership": true, "location": "Seattle", "type": "diagnosis"},
        {"jobName": "Job 16", "status": "completed", "revenue": 5079.181422127414, "outstanding": 187.38785073607928, "membership": true, "location": "Seattle", "type": "diagnosis"},
        {"jobName": "Job 17", "status": "completed", "revenue": 5012.466482916801, "outstanding": 854.2128633648745, "membership": false, "location": "Everett", "type": "backflow testing"},
        {"jobName": "Job 18", "status": "completed", "revenue": 5269.875381931349, "outstanding": 168.7623760559968, "membership": true, "location": "Malibu", "type": "alarm-system"},
        {"jobName": "Job 19", "status": "scheduled", "revenue": 5314.87814104735, "outstanding": 951.7516476563392, "membership": false, "location": "New York", "type": "fire-extinguisher"},
        {"jobName": "Job 20", "status": "scheduled", "revenue": 5403.212590042171, "outstanding": 576.9248545431248, "membership": false, "location": "Everett", "type": "backflow testing"},
        {"jobName": "Job 21", "status": "scheduled", "revenue": 5428.894695810494, "outstanding": 259.7771867613674, "membership": true, "location": "Malibu", "type": "fire-extinguisher"},
        {"jobName": "Job 22", "status": "cancelled", "revenue": 5392.051836103556, "outstanding": 809.0073036736728, "membership": false, "location": "Everett", "type": "diagnosis"},
        {"jobName": "Job 23", "status": "scheduled", "revenue": 5074.624796057724, "outstanding": 79.66125774131337, "membership": true, "location": "Malibu", "type": "fire-extinguisher"},
        {"jobName": "Job 24", "status": "completed", "revenue": 5095.697080777678, "outstanding": 524.9754867624445, "membership": true, "location": "Social Circle", "type": "alarm-system"},
      ];