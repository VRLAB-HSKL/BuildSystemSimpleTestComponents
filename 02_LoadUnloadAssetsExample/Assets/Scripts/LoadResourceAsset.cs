using System.Collections;
using Unity.EditorCoroutines.Editor;
using UnityEditor;
using UnityEditor.SceneManagement;
using UnityEngine;


public class LoadResourceAsset : MonoBehaviour
{

    int m_Updates = 0;
    void OnEnable()
    {
        EditorCoroutineUtility.StartCoroutine(CountEditorUpdates(), this);
    }

    [MenuItem("LoadUnloadAssets/LoadVIU")]
    private static void LoadViuAsset()
    {
        EditorUserBuildSettings.SwitchActiveBuildTarget(BuildTargetGroup.Standalone, BuildTarget.StandaloneWindows64);
        //Open the Scene in the Editor (do not enter Play Mode)
        EditorSceneManager.OpenScene("Assets/Scenes/VIU.unity");
        AssetDatabase.ImportPackage("Assets/Resources/ViveInputUtility_v1.10.7.unitypackage", false);
        
    }

    [MenuItem("LoadUnloadAssets/UnLoadVIU")]
    private static void UnloadViuAsset()
    {
        //AssetDatabase.ExportPackage("Assets/HTC.UnityPlugin", "HTC.UnityPLugin");
        string[] files = AssetDatabase.FindAssets("HTC.UnityPlugin");
        AssetDatabase.DeleteAsset("Assets/HTC.UnityPlugin");

       // Debug.Log(files[1].ToString());
    }

    [MenuItem("LoadUnloadAssets/LoadGvR")]
    private static void LoadGvR()
    {
        EditorUserBuildSettings.SwitchActiveBuildTarget(BuildTargetGroup.Android, BuildTarget.Android);
        EditorSceneManager.OpenScene("Assets/Scenes/GVR.unity");
        AssetDatabase.ImportPackage("Assets/Resources/GoogleVRForUnity_1.200.1.unitypackage", false);
    }

    [MenuItem("LoadUnloadAssets/UnloadGvR")]
    private static void UnloadGvR()
    {
        AssetDatabase.DeleteAsset("Assets/GoogleVR");
    }

    IEnumerator CountEditorUpdates()
    {
        while (true)
        {
            ++m_Updates;
            Debug.Log(m_Updates);
            yield return null;
        }
    }

}
