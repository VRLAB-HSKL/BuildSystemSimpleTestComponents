using UnityEngine;
using UnityEditor;

public class Example : MonoBehaviour
{
    [MenuItem("AssetDatabase/LoadAllAssetsAtPath")]
    private static void PrintAssets()
    {
        Object[] data = AssetDatabase.LoadAllAssetsAtPath("Assets/");

        Debug.Log(data.Length + " Assets");

        foreach (Object o in data)
        {
            Debug.Log(o);
        }

        // outputs:
        //  5 Assets
        //  MySpriteTexture (UnityEngine.Texture2D)
        //  MyTexture_0 (UnityEngine.Sprite)
        //  MyTexture_1 (UnityEngine.Sprite)
        //  MyTexture_2 (UnityEngine.Sprite)
        //  MyTexture_3 (UnityEngine.Sprite)
    }
}
